import React, { useState, useEffect } from 'react'
import './Gym.css'
import Spinner from '../Spinner/Spinner';

const gymData = [
    {
        name: "Brave Life Gym",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqLta7l7VO8IhdYEI87SdkULmK-g6L4eItL8FBKjcr_mr0ua5_nCDWSGD1KScEStAduIwuY2K5UY_dXmX_4qsr9yTh8pqkxOcwJF73NaJDARJI6JDVyVi3R-6c_VTJ3GV14Zbqi=w408-h904-k-no',
        longitude: 77.50155027492295,
        latitude: 28.60046887089126
    },
    {
        name: "Nextgen fitness and repairing services",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npWsuVfabY9uOHSPzxb0OQaserModBCFZM_79W6UQV8DzSteRaTWVZpU1TDerSBodDdh4At_0dc9UEokpwDmYtklAW4sdC_bT8AUyrj0uIiFQXdd1Qtz3Vx-PydqqDyDwwJoTOB=w408-h306-k-no',
        longitude: 77.48715849378736,
        latitude: 28.606650257450013
    },
    {
        name: "GO STRONG GYM & NUTRITION",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrjccsNSjE1dehNysSFQwOwEY-PibIAmGab8v9zlUiB1nGyUjWR1Ph9q_f0f1wzzdXpddbu8mv1KmC9BR9Kpv9wgY2_KuE3csz7E3lEEdSTgexpkzvE2iS4o-ZabH2QR-KmxnsFvg=w408-h306-k-no',
        longitude: 77.48686065927237,
        latitude: 28.586262382583307
    },
    {
        name: "JBM FITNESS GYM",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqm12v0CSuz_Q5RtL0ensOJ9yLCeuJB_eftOEiSsP385cNJDSEPeQMSMRKgBfl61U-wJwGqQqa2YZmgNQyqmmhY31T1zS9GJSszhtx6Nj1kTv2-HofEnpqahNudbvBgqON46igO=w408-h306-k-no',
        longitude: 77.4820541408501,
        latitude: 28.595909009543327
    },
    {
        name: "The Wellness Club Gym",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npCoKyThC5zbrOYNotScKePGTMQUxt7I7eqECU88bVQ6_t8G5Ntbt9Ot7SRPan45_ZKhub_j1fgNhL-lMOTkSRrkzoxwkcP0VJtE28nXPijnmsr1uuFZJ9flh4wSq8b7fClVmsD=w408-h571-k-no',
        latitude: 28.584438320423782,
        longitude: 77.48103643323327
    },
    {
        name: "JSB Health Club",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqgrh5QZcrEhRFb-a450xm59rG_VGBalRC9ug326thlyzxgFRchVlDhknRFz_jPfeQS9Hzmvxp1xxDIJ_zJ4jyI7hFBXgFk3ziu9KDks_4aggSgWAzfjlwTFtn3oJXeX1cNr9I5Dw=w408-h306-k-no',
        latitude: 28.611567672980396,
        longitude: 77.48326803107219
    },
    {
        name: "Make Strength Gym & Fitness Bodybuilding Center",
        image: 'https://lh3.googleusercontent.com/p/AF1QipMrcCyA4JLpyVMLbJGLdjUl_NVYVkntSIYvrU2k=w408-h306-k-no',
        latitude: 28.60403244421761,
        longitude: 77.46421361875538
    },
    {
        name: "The Wellness Club Gym",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no_4jtVImozD98c-RLBpDLcGCYG6djrnmrgV5QhgxydZCCiw7yfftasrpAbidFeTKRRuq3uH7uVYn4zjrWlQh19l-YKRIYAKcFRWqlN5aV1kmOozo0VNLT-dWSDenx_AgcQpQPvYA=w408-h508-k-no',
        latitude: 28.59498945633516,
        longitude: 77.47056508952764
    },
    {
        name: "SRT FITNESS UNISEX GYM",
        image: 'https://lh3.googleusercontent.com/p/AF1QipO7gXZ54HwqAx7R1IoqJRePOwWo63vbDqcc3iUO=w408-h725-k-no',
        latitude: 28.603128180446994,
        longitude: 77.46850515306096
    },
    {
        name: "Ayush Fitness Club",
        image: 'https://lh3.googleusercontent.com/p/AF1QipMr46nGOStmP1hOvfMhgOg6MZzyhhkg82g0IFEO=w408-h726-k-no',
        latitude: 28.606443776225497,
        longitude: 77.47880483539437
    },
    {
        name: "The Elite Fitness Gym",
        image: 'https://lh3.googleusercontent.com/p/AF1QipOpQ2_LHFXW0zSUxhIe7VRhBATzSVJVqCRSEk4=w408-h544-k-no',
        latitude: 28.620458547687196,
        longitude: 77.48687291988888
    },
    {
        name: "Red Gym",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no56rLq5U9NcG2KSRXWDMuLBlYYvXhQuchIYi7GnOBBIf2ROcLywbdmqh0ZMECM-EdrXA_CG52AR4Nk_eVuHFbgNiEUv8T4-Y4b_SqX_0rKAcY5QexN5MrGWO57KnP0krlnb7H9=w408-h510-k-no',
        latitude: 28.590166211310606,
        longitude: 77.51451040081689
    },
    {
        name: "MM GYM TOWN",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq98mKOzYyB_6aimCKfWMlsCiJQwkOU1VC9F0Tmek7RWsWHlMV6OLKuXW5XdwIvrDUBQIWZw9Yv2nV61KptumLXw204hDsbF8JoUsBIPn5IXVDjofmjKvBo947OBRNBcyUpXkTa=w408-h306-k-no',
        latitude: 28.619855800306908,
        longitude: 77.48498464479442
    },
    {
        name: "Lion Fitness Club",
        image: 'https://lh3.googleusercontent.com/p/AF1QipPHBZmDObJnyjzSoWAVrU2dpwQfEKApfE9-HNox=w408-h306-k-no',
        latitude: 28.60373102382543,
        longitude: 77.46490026424426
    },
    {
        name: "GYMTownclub",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noTP1Z6aSgqleXB6rWm4BfZOKrfCztC12oq6XTAj8PWBc_4MswXBnsaQUrxn_bLChNx4siyXyOqP-LG5x5WzjaLYH5AC0TkES2-GAWay5WLwgAfIDiV_OCejWWMz8J2LaoZu9HAgX56c4sL=w408-h544-k-no',
        latitude: 28.595441624209748,
        longitude:  77.46953512129429
    },
    {
        name: "Lifetime Fitness GYM",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noSHZw4uQc3Fn3SHKXbmjkBnMOxJmb3qqLAX7VPsEtbNyQhOGpo6gxNDr3PWMWceGLNQYkLo-vuhg3wZlf6Y0rAhphiLhQCP55G1mKXrWPs3q3PbZRLHD4Xr690hVYywUcJfHQ=w493-h240-k-no',
        latitude: 28.57675039753372,
        longitude: 77.48876119498334
    },
    {
        name: "Blue Stone Gym",
        image: 'https://lh3.googleusercontent.com/p/AF1QipO0fO_1tACSZ-2dk-rhfgAF81rJ5lFkmeGpH-Dq=w408-h408-k-no',
        latitude: 28.580820544361515,
        longitude: 77.52807164922257
    },
    {
        name: "JDS GYM",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrsSXCU1I8w8HG3d4kBL51r46__2xR1CUqdxT9Vxa9GoZbcdsmwviKQkI6BcygoKhwHKx_ovwDKcWpmw1RczHJxBmbfq0eUb9Ui1YzMNM33X6EgEGzfFHN2oeqXKte-cEh8qIhWgwAk4ckw=w408-h408-k-no',
        latitude: 28.596496675019107,
        longitude: 77.46936345992208
    },
    {
        name: "FittCube Gym",
        image: 'https://lh3.googleusercontent.com/p/AF1QipNM4PTFN8DAJaWJzHwsLQiIgFwW5Di1VOqDmP9r=w408-h306-k-no',
        latitude: 28.60959779665268,
        longitude: 77.45501236829455
    },
    {
        name: "Lifetime Fitness Gym",
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqBrY9AMx8EwNENkmda5S220pNl21gYH1jtbOt8Zg2umqH6-Dlbl1_MIlVkNKhtk55pM7TrxJVG39GbWpMDP55ZMH9btsXSBtEIP91njiHJZg8JotqNArPTiCiMM864C82kyTxWLw=w408-h306-k-no',
        latitude: 28.57673962532258,
        longitude: 77.48865799725039
    }
]

export default function Gym( { userPosition, API_KEY } ) {
    const [sortedGyms, setSortedGyms] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDistance = () => {
        if (userPosition) {
            const body = {
                mode: "drive",
                sources: [
                    {
                        location: [userPosition.longitude, userPosition.latitude] // Geoapify expects [lon, lat]
                    }
                ],
                targets: gymData.map(gym => ({
                    location: [gym.longitude, gym.latitude]
                }))
            };
            fetch(`https://api.geoapify.com/v1/routematrix?apiKey=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(result => {
                    // Log or process the result as needed
                    if (result?.sources_to_targets?.[0]?.[0]?.distance) {
                        const distances = result.sources_to_targets[0].map(item => item.distance);

                        // Merge gymData with distances
                        const gymsWithDistance = gymData.map((gym, i) => ({
                           ...gym,
                            distance: distances[i] // distance in meters
                        }));

                        // Sort gyms by distance
                        gymsWithDistance.sort((a, b) => a.distance - b.distance);
                        setLoading(false);
                        setSortedGyms(gymsWithDistance);
                    }
                }
                )
                .catch(error => console.log('error', error));
        }
    }

    useEffect(getDistance, [userPosition, API_KEY]);

    return (
        <div className="container">
            <h1 id='gymCards-heading'>Gym Near You</h1>
            {loading ? <Spinner height="clamp(50px, 7.5vw, 80px)" width="clamp(50px, 7.5vw, 80px)"/> :
            <div className="gymCards animate-cards">
                {sortedGyms.map((gym, index) => {
                    return (
                        <div className="gymCard" key={index}>
                            <div className="card">
                                <img src={gym.image} className="gym-img-top" alt={gym.name} />
                                <div className="gym-body">
                                    <h5 className="gym-name">{gym.name}</h5>
                                    <p className="gym-distance">Distance: {gym.distance ? gym.distance+' m': 'Loading...'}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
