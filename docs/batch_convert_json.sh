#!/bin/bash
# Batch convert all ChatGPT JSON exports to Markdown
# For Ethereal Offering project

echo "🍄 Ethereal Offering - Batch JSON to Markdown Converter ✨"
echo "=========================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Counter
total=0
success=0
failed=0

# Function to convert a single file
convert_file() {
    local json_file="$1"
    local output_dir="$2"
    
    if [ ! -f "$json_file" ]; then
        echo -e "${RED}❌ File not found: $json_file${NC}"
        return 1
    fi
    
    # Get filename without extension
    filename=$(basename "$json_file" .json)
    output_file="$output_dir/${filename}.md"
    
    echo -e "${YELLOW}📝 Converting: $filename${NC}"

    # Try robust converter first
    output=$(python3 "$SCRIPT_DIR/convert_chatgpt_robust.py" "$json_file" "$output_file" 2>&1)

    if echo "$output" | grep -q "Successfully converted"; then
        echo -e "${GREEN}✅ Success: $output_file${NC}"
        return 0
    else
        echo -e "${RED}❌ Failed: $filename${NC}"
        echo "$output" | tail -n 3
        return 1
    fi
}

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Main conversion
echo "Converting files from Claude GPT export..."
echo ""

DIR1="$SCRIPT_DIR/CHATGPT_ethereal_offering_docusaurus_packages/Claude GPT export/chatGPT json exports"
cd "$DIR1" || exit 1

for json_file in *.json; do
    total=$((total + 1))
    if convert_file "$json_file" "."; then
        success=$((success + 1))
    else
        failed=$((failed + 1))
    fi
    echo ""
done

echo ""
echo "Converting files from Claude GPT export 2..."
echo ""

DIR2="$SCRIPT_DIR/CHATGPT_ethereal_offering_docusaurus_packages/Claude GPT export 2/chatGPT json exports2"
cd "$DIR2" || exit 1

for json_file in *.json; do
    total=$((total + 1))
    if convert_file "$json_file" "."; then
        success=$((success + 1))
    else
        failed=$((failed + 1))
    fi
    echo ""
done

# Summary
echo "=========================================================="
echo -e "${GREEN}📊 Conversion Summary${NC}"
echo "=========================================================="
echo -e "Total files: $total"
echo -e "${GREEN}✅ Successful: $success${NC}"
echo -e "${RED}❌ Failed: $failed${NC}"
echo ""
echo "🍄 ✨ ⛪ Conversion complete!"

