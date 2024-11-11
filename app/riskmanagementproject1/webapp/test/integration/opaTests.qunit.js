sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementproject1/test/integration/FirstJourney',
		'riskmanagementproject1/test/integration/pages/RisksList',
		'riskmanagementproject1/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementproject1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);