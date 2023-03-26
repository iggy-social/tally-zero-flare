import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import OzGovernor_ABI from "../utils/abis/OzGovernor_ABI.json";
import {
  getProposalState,
} from "../utils/functions/getProposalState";

type Proposal = {
  id: number;
  proposer: string;
  targets: string[];
  values: ethers.BigNumber[];
  signatures: string[];
  calldatas: string[];
  startBlock: ethers.BigNumber;
  endBlock: ethers.BigNumber;
  description: string;
};

export type ParsedProposal = {
  id: number;
  proposer: string;
  targets: string[];
  values: string[];
  signatures: string[];
  calldatas: string[];
  startBlock: string;
  endBlock: string;
  description: string;
  state: string | undefined;
};

export function useParseProposals(
  provider: ethers.providers.Provider,
  contractAddress: `0x${string}` | undefined,
  proposals: Proposal[],
  enabled: boolean
): ParsedProposal[] {
  const [parsedProposals, setParsedProposals] = useState<ParsedProposal[]>([]);

  useEffect(() => {
    if (!enabled || !contractAddress) return;
    const parseProposals = async () => {
      const governorContract = new ethers.Contract(
        contractAddress,
        OzGovernor_ABI,
        provider
      ) as Contract;

      proposals.map(async (proposal) => {
        governorContract.state(proposal.id).then((proposalState: number) => {
          setParsedProposals((prev) => [
            ...prev,
            {
              ...proposal,
              values:
                proposal.values.length > 0
                  ? proposal.values.map((value) => value.toString())
                  : [],
              startBlock: proposal.startBlock.toString(),
              endBlock: proposal.endBlock.toString(),
              state: getProposalState(proposalState),
            },
          ]);
        });
      });
    };

    parseProposals();
  }, [proposals, provider, contractAddress, enabled]);

  return parsedProposals;
}
