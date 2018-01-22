source(findFile("scripts", "outils.js"));
source(findFile("scripts", "data.js"));

function init() {
    test.startSection("Init");
    try {
        attachToApplication("SolidEditorApp");
        outils_login(user_admin_login, user_admin_pass);
        outils_launch_first_exercise(category_familiarization);
    } catch (err) {
        test.fail(err.toString());
    } finally {
        test.endSection();
    }
}

function main() {
    test.startSection("1 - Reset treatment case");
    try {
        clickButton(waitForObject(":stackedWidget.Settings_QPushButton"));
        test.compare(waitForObject(":stackedWidget.resetExerciseBtn_QPushButton").objectName, "resetExerciseBtn", "Le bouton RESET EXERCISE s'est affiché");
        clickButton(waitForObject(":stackedWidget.resetExerciseBtn_QPushButton"));
        clickButton(waitForObject(":stackedWidget.Reset_QPushButton"));
        // Check if the exercise was reseted
        var windowResponse = testInteraction.question("Has the exercise been reset ?")
        if ( windowResponse == testInteraction.Yes ) {
            test.pass("Verified: The exercise has been reset.");
        } else {
            test.fail("Not verified: The exercise has not been reset.");
        }
    } catch (err) {
        test.fail(err.toString());
    } finally {
        test.endSection();
    }
}

function cleanup() {
    test.startSection("Cleanup");
    try {
        outils_stop_sim_no_save();        
        outils_logoff();
    } catch (err) {
        test.fail(err.toString());
    } finally {
        test.endSection();
    }
}
