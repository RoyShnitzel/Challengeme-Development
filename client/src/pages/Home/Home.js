import React, { useEffect, useState, useContext } from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import "./Home.css";
import AllChallenges from "../../context/AllChallengesContext";
import FilteredLabels from '../../context/FilteredLabelsContext';

export default function Home() {
    const allChallenges = useContext(AllChallenges).challenges;
    const filteredLabels = useContext(FilteredLabels);
    const [challengesFiltered, setChallengesFiltered] = useState(allChallenges);

    useEffect(() => {
        (async () => {
            try {
                if (filteredLabels.filteredLabels.length > 0) {
                    const filteredByLabelChallenges = [];
                    allChallenges.forEach((challenge) => {
                        if (filteredLabels.filteredLabels.every((label) => challenge.Labels.map(label => label.id).includes(label))) {
                            if (!filteredByLabelChallenges.includes(challenge)) {
                                filteredByLabelChallenges.push(challenge);
                            }
                        }
                    })
                    setChallengesFiltered(filteredByLabelChallenges);
                } else {
                    setChallengesFiltered(allChallenges);
                }
            } catch (e) { }
        })();
        // eslint-disable-next-line
    }, [filteredLabels]);

    useEffect(() => {
        return () => filteredLabels.setFilteredLabels([])
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {/* <Background /> */}
            <div className="home-page">
                <div className={"challenges-container"}>
                    {challengesFiltered.length > 0 ? (
                        challengesFiltered.map((challenge) => {
                            return (
                                <ChallengeCard
                                    key={challenge.id}
                                    challengeId={challenge.id}
                                    name={challenge.name}
                                    description={challenge.description}
                                    repositoryName={challenge.repositoryName}
                                    labels={challenge.Labels}
                                    rating={challenge.averageRaiting}
                                    submissions={challenge.submissionsCount}
                                    createdAt={challenge.createdAt}
                                    authorName={challenge.Author.userName}
                                />
                            )

                        })) : <h1>Not Found</h1>}
                </div>
            </div>
        </div>
    );
}
