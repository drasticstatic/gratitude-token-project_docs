import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Vault, Users, TrendingUp, Award, BookOpen, Sprout } from "lucide-react";

export default function TreasuryProposalModal({ isOpen, onClose }) {
  // Bank Emoji SVG
  const BankEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">🏛️</text>
      <circle cx="12" cy="12" r="11" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Treasury Proposal System"
      subtitle="Community-Governed Resource Allocation"
      titleIcon={BankEmojiIcon}
      titleColor="#3b82f6"
      borderColor="rgba(59, 130, 246, 0.5)"
      shadowColor="rgba(59, 130, 246, 0.4)"
      scrollbarColor="#3b82f6"
    >
      {/* Overview */}
      <ModalCard
        icon={Vault}
        title="DAO Treasury Overview"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>Psanctuary DAO Treasury</strong> is a community-governed fund that supports the mission of sacred mushroom cultivation, education, and spiritual exploration.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>💰 Treasury Sources</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>ETHO Crowdsale</strong> - Primary fundraising mechanism</li>
          <li><strong>Ministership Tuition</strong> - Educational program fees</li>
          <li><strong>Donations</strong> - Community contributions</li>
          <li><strong>AMM Swap Fees</strong> - Small percentage from token swaps</li>
          <li><strong>NFT Sales</strong> - Cross-bred mushroom NFT marketplace</li>
        </ul>
      </ModalCard>

      {/* Proposal Types */}
      <ModalCard
        icon={Users}
        title="Types of Treasury Proposals"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>📋 Funding Categories</h4>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🌿 Cultivator Support</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Housing and living expenses for certified cultivators</li>
            <li>Growing supplies and equipment</li>
            <li>Research and development grants</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🎓 Educational Scholarships</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Full or partial tuition coverage for ministership programs</li>
            <li>Financial assistance for students with barriers to entry</li>
            <li>Mentorship program funding</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🔬 Research & Development</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Psilocybin research initiatives</li>
            <li>Cultivation technique improvements</li>
            <li>Technology infrastructure upgrades</li>
          </ul>
        </div>

        <div>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🏛️ Community Projects</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Retreat center development</li>
            <li>Sacred space construction</li>
            <li>Community events and gatherings</li>
          </ul>
        </div>
      </ModalCard>

      {/* Proposal Process */}
      <ModalCard
        icon={TrendingUp}
        title="Proposal Submission Process"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>📝 How to Submit a Proposal</h4>

        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Draft Your Proposal</strong> - Include clear objectives, budget, and timeline</li>
          <li><strong>Community Discussion</strong> - Share in Discord/forum for feedback (7 days)</li>
          <li><strong>Formal Submission</strong> - Submit on-chain proposal with PSILO stake</li>
          <li><strong>Voting Period</strong> - 14-day voting window for token holders</li>
          <li><strong>Execution</strong> - If approved, funds are released from treasury</li>
        </ol>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px' }}>⚡ Proposal Requirements</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Minimum 100 PSILO stake to submit</li>
            <li>Detailed budget breakdown</li>
            <li>Clear deliverables and milestones</li>
            <li>Community benefit statement</li>
          </ul>
        </div>
      </ModalCard>

      {/* Voting Mechanics */}
      <ModalCard
        icon={Award}
        title="Voting Mechanics"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🗳️ Who Can Vote?</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>PSILO Holders</strong> - Voting power proportional to staked PSILO</li>
          <li><strong>Cultivators</strong> - Bonus voting weight for certified cultivators</li>
          <li><strong>Teachers</strong> - Enhanced voting power for active educators</li>
          <li><strong>Long-term Stakers</strong> - Time-weighted voting multiplier</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>📊 Voting Options</h4>
        <div style={{ background: 'rgba(251,191,36,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(251,191,36,0.3)' }}>
          <p style={{ marginBottom: '8px' }}><strong>✅ For</strong> - Support the proposal</p>
          <p style={{ marginBottom: '8px' }}><strong>❌ Against</strong> - Oppose the proposal</p>
          <p><strong>🤔 Abstain</strong> - Counted for quorum but neutral</p>
        </div>

        <p style={{ marginTop: '12px', color: '#9ca3af', fontSize: '0.9rem' }}>
          <em>Quorum: 20% of circulating PSILO must participate for vote to be valid</em>
        </p>
      </ModalCard>

      {/* Scholarship System */}
      <ModalCard
        icon={BookOpen}
        title="Scholarship Allocation"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🎓 Mission-Aligned Education</h4>
        <p style={{ marginBottom: '12px' }}>
          The treasury prioritizes <strong>removing financial barriers</strong> to sacred mushroom education and cultivation training.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>💝 Scholarship Benefits</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li>Full or partial tuition coverage for ministership programs</li>
          <li>Access to all educational materials and resources</li>
          <li>Mentorship from certified cultivators</li>
          <li>Participation in community governance</li>
          <li>Opportunity to "pay it forward" through future teaching</li>
        </ul>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>📋 Application Process</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Submit scholarship application with personal statement</li>
          <li>Community review and discussion</li>
          <li>Treasury proposal vote</li>
          <li>If approved, scholarship funds allocated</li>
        </ol>
      </ModalCard>

      {/* Cultivator Grants */}
      <ModalCard
        icon={Sprout}
        title="Cultivator Grant Program"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🌿 Supporting Sacred Work</h4>
        <p style={{ marginBottom: '12px' }}>
          Certified cultivators can apply for <strong>treasury grants</strong> to support their sacred mushroom cultivation and community service.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>💰 Grant Categories</h4>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🏠 Living Stipends</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
            Monthly support for cultivators dedicating full-time to sacred mushroom work
          </p>

          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🛠️ Equipment & Supplies</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
            Funding for grow tents, climate control, substrate materials, and tools
          </p>

          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🔬 Research Projects</p>
          <p style={{ fontSize: '0.95rem' }}>
            Grants for experimental cultivation techniques or strain development
          </p>
        </div>

        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.3)' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '8px' }}>✨ Cultivator Benefits</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Extra daily mushroom tokens</li>
            <li>Enhanced voting power in DAO</li>
            <li>Priority access to treasury grants</li>
            <li>Recognition as certified steward</li>
          </ul>
        </div>
      </ModalCard>

      {/* Treasury Transparency */}
      <ModalCard
        icon={TrendingUp}
        title="Transparency & Accountability"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>📊 On-Chain Transparency</h4>
        <p style={{ marginBottom: '12px' }}>
          All treasury transactions are <strong>recorded on-chain</strong> and publicly viewable. The community can audit all fund movements at any time.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>📈 Regular Reporting</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li>Monthly treasury balance reports</li>
          <li>Quarterly spending summaries</li>
          <li>Annual impact assessments</li>
          <li>Real-time dashboard of active proposals</li>
        </ul>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🔒 Multi-Sig Security</h4>
        <p style={{ marginBottom: '12px' }}>
          Treasury funds are secured by a <strong>multi-signature wallet</strong> requiring approval from multiple elected community stewards.
        </p>

        <div style={{ background: 'rgba(96,165,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(96,165,250,0.3)' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '8px' }}>🛡️ Safety Measures</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>3-of-5 multi-sig for large expenditures</li>
            <li>Time-locked proposals for major changes</li>
            <li>Emergency pause mechanism</li>
            <li>Regular security audits</li>
          </ul>
        </div>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Users}
        title="Get Involved"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🚀 Participate in Governance</h4>
        <p style={{ marginBottom: '12px' }}>
          The treasury belongs to the community. Your voice matters in shaping how resources support our sacred mission.
        </p>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px' }}>✨ Ways to Participate</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Stake PSILO to gain voting power</li>
            <li>Submit proposals for community benefit</li>
            <li>Vote on active treasury proposals</li>
            <li>Provide feedback in community discussions</li>
            <li>Apply for scholarships or cultivator grants</li>
          </ul>
        </div>

        <p style={{ marginTop: '16px', textAlign: 'center', color: '#a78bfa', fontWeight: 600 }}>
          Together, we cultivate peace and sacred wisdom 🍄✨
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

