import MoreNews from "../../../shared/components/MoreNews/MoreNews";
import Typography from "../../../shared/components/Typography/Typography";
import bannerImage from "../assets/singleNewsBanner.png";

const SingleNews = () => {
  return (
    <div className="bg-background-primary">
      <div className="grid lg:grid-cols-3  max-w-[1400px] mx-auto px-3  py-16 max gap-8">
        <div className="col-span-2 bg-white py-4">
          <div className="p-4">
            <Typography variant="h3">
              The Scalability Solution: Understanding Layer One vs. Layer Two
              Blockchains{" "}
            </Typography>
            <Typography>20 Sep 2023, 8:00pm</Typography>
            <Typography className="mt-4 mb-5" variant="h5">
              by Alex House
            </Typography>
          </div>

          <div>
            <img
              className="lg:h-[446px] w-full md:h-[380px] sm:h-[320px]
                h-[280px]"
              src={bannerImage}
              alt=""
            />
          </div>

          <div className="space-y-4 mt-4 p-4">
            <Typography>
              Layer one or L1 refers to a base blockchain protocol like Bitcoin
              or Ethereum. These networks operate on a decentralized ledger
              secured by proof-of-work (PoW) mining or proof-of-stake (PoS)
              staking. L1 chains such as Bitcoin and Ethereum offer unparalleled
              security. However, during peak times, both of these chains grapple
              with sluggish transaction speeds and steep fees.
            </Typography>
            <Typography>
              Developers from several L1 networks are working to improve layer
              one scaling through methods like increasing block size, sharding,
              and introducing proof-of-stake consensus. However, substantial
              layer one upgrades require coordination among node operators and
              can take years to implement. Some blockchains intend to use L2
              protocols as either a temporary or long-term solution.
            </Typography>
            <Typography>
              Bitcoin’s Lightning Network (LN) is a second-layer scaling
              solution designed to facilitate faster, low-cost transactions on
              the Bitcoin blockchain (L1). It operates on top of Bitcoin’s base
              layer, allowing for instant payments by circumventing the need for
              block confirmations.
            </Typography>
            <Typography>
              Transactions on the Lightning Network occur off-chain in payment
              channels between users. Only channel open and close transactions
              are recorded on the Bitcoin blockchain. Participants can transact
              multiple times within these channels, reducing congestion and fees
              on L1.
            </Typography>
            <Typography>
              Critics target LN for its prevalent use of custodial wallets, as
              these demand users place trust in third parties to handle their
              money. Moreover, the off-chain method poses a risk: if nodes lack
              proper backup, it could trigger an irrevocable loss of funds.
            </Typography>
            <Typography>
              Loopring uses zero-knowledge rollups (ZK-rollups) to batch
              hundreds of transactions off-chain and generate a cryptographic
              proof verifying their validity. This proof is submitted to layer
              one (Ethereum), avoiding the need to process each transaction
              on-chain.
            </Typography>
            <Typography>
              Polygon ZKEVM also uses ZK-rollup technology to offer high
              throughput Ethereum transactions with lower fees. On the risk
              side, some believe that relying heavily on ZK-rollups can
              introduce centralization risks as validators and sequencers become
              key to the system.
            </Typography>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 p-4 bg-white">
          <Typography variant="h4">More News</Typography>
          <MoreNews></MoreNews>
          <MoreNews></MoreNews>
          <MoreNews></MoreNews>
          <MoreNews></MoreNews>
          <MoreNews></MoreNews>
          <MoreNews></MoreNews>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
