/**
 * @description Start Dental, move the Additional window to the Screen 2
 *              and give focus to MainWindow
 */
function outils_startDental() {
        // Both windows are displayed on the same screen, Windows 1. I've tried to move the Additional window
        // to Windows 2, but Squish fails with a "ambiguous function call at the additionalWnd.moveTo(x, y) line"    
        attachToApplication("DentalAttachable");
        source(findFile("scripts", "javascript/screen.js"));
        source(findFile("scripts", "javascript/toplevelwindow.js"));
    //    var screenCount = Screen.count();
    //    test.log("Outils - screenCount = " + screenCount);
    //    for (var i=0; i<screenCount; i++) {
    //        var screen = Screen.byIndex(i);
    //       test.log("Outils - Squish screen " + i + " (Windows " + (i + 1) + ") : " +
    //            " x = " + screen.geometry.x + ", y = " +  screen.geometry.y + ", " +
    //            " w = " + screen.geometry.width + ", h = " + screen.geometry.height);
    //    }
        // How long Squish should wait until it times out, in milliseconds
        var timeOut = 1;
        
        // Squish screen index starts at 0, Windows screen ID's start 1,
        // Squish index : 0  1  2
        // Windows id   : 1  2  3
        var screenIdx = 1;
        
        // The screen's geometry is the origin (x,y) and size (width, height)
        // The origin (x = 0, y = 0) is in the top left of the Windows screen 1
        // Negative values means screen is to the left (x) and/or above (y)
        var screenGeom = Screen.byIndex(screenIdx).geometry;
        var pos_x = screenGeom.x, pos_y = screenGeom.y;
        test.log("Outils - Screen.byIndex(screenOne).geometry : x = " + pos_x + ", y = " + pos_y);
        var width = screenGeom.width, height = screenGeom.height;  
        test.log("Outils - Screen.byIndex(screenOne).geometry : width = " + width + ", height = " + height);
        
        // Move the Additional window to the second screen it and resize the window to fill the screen
        var additionalWnd = ToplevelWindow.byName(":AdditionalWindow_vts::core::AdditionalWindow", timeOut);
        additionalWnd.moveTo(pos_x, pos_y);
        additionalWnd.resizeTo(width, height);
        
        // Bring the Main window to the front and give the focus
        var mainWnd = ToplevelWindow.byName(":MainWindow_vts::core::MainWindow", timeOut);
        mainWnd.setForeground();
        mainWnd.setFocus();
}


/**
 * @description Attaches Squish's runner to Dental
 */
function outils_attachDental() {
    attachToApplication("DentalAttachable");    
}


/**
 * @description Logs a user into the app
 *              Starts at UserConnectionView
 *              Ends at HomeView
 * @param {string} login     User's login 
 * @param {string} password  User's password
 */
 function outils_login(login, password){
    test.log("Outils - Logging in with " + login);
    waitForObject(":databaseConnectionGroupBox.loginConnectionComboBox_QComboBox").currentText = login;
    waitForObject(":databaseConnectionGroupBox.passwordConnectionLineEdit_QLineEdit").text = password;
    
    clickButton(waitForObject(":databaseConnectionGroupBox.connectUserButton_QPushButton"));
}
 

/**
 * @description Launches an exercise
 * @param {string} category
 * @param {string} name
 */
function outils_launch_exercise(category, name) {
    waitForObjectItem(":stackedWidget_QTreeView", category);
    clickItem(":stackedWidget_QTreeView", category, 0, 0, Qt.NoModifier, Qt.LeftButton);
    var exercisesModel = waitForObject(":stackedWidget.tableWidget_QTableWidget").model();
    for ( var i = 0; i < exercisesModel.rowCount(); i++ ) {
        for ( var j = 0; i < exercisesModel.columnCount(); j++ ) {
            test.log("" + i + "," + j + " : " + exercisesModel.index(i,j) + "");
        }
    }
    clickButton(waitForObject(":projectSelectionGroupBox.startProjectButton_QPushButton"));
    clickButton(waitForObject(":stackedWidget.launchButton_QPushButton"));
}


/**
 * @description Launches an exercise
 * @param {string} category
 */
function outils_launch_first_exercise(category) {
    clickButton(waitForObject(":Learn.LearnButton_QPushButton"));
    clickItem(":stackedWidget_QTreeView", category, 0, 0, Qt.NoModifier, Qt.LeftButton);
    clickButton(waitForObject(":projectSelectionGroupBox.startProjectButton_QPushButton"));
    clickButton(waitForObject(":stackedWidget.launchButton_QPushButton"));
}


/**
 * @description Perform a mouse drag in the object. Positive is to the left and up
 * @param {string}  obj     The name of the widget
 * @param {Number}  h_drag  Horizontal drag distance
 * @param {Number}  v_drag  Vertical drag distance
 */
function outils_mouse_drag(obj, h_drag, v_drag) {
    test.log("Outils - Mouse drag on " + obj);
    var widget = waitForObject(obj);
    mouseDrag(widget, widget.width/2, widget.height/2, h_drag, v_drag, Qt.NoModifier, Qt.LeftButton);
    /*
     * Squish mouseDrag(...) howto
     * obj              the object where the drag begins
     * x                horizontal coordinate, relative to objName
     * y                vertical coordinate, relative to objName
     * dx               horizontal drag distance
     * dy               vertical drag distance
     * modifierState    Qt::KeyboardModifier
     * button           Qt::MouseButton
    mouseDrag(waitForObject(":SliceViewer_vts::modules::simulation::QVTKWidget3"),   240, 150, -30, 0, 0, Qt.LeftButton);
    mouseDrag(waitForObject(":SliceViewer_vts::modules::simulation::QVTKWidget3_2"), 240, 150,   0,  30, 0, Qt.MidButton);
    mouseDrag(waitForObject(":SliceViewer_vts::modules::simulation::QVTKWidget3_3"), 240, 150,   0, -30, 0, Qt.RightButton);
     */
}


/**
 * @description Perform a mouse wheel scroll. Positive is towards the user
 * @param {Number}  degrees     The wheel rotation, in 1/8 °. Mouse wheels go in 15° steps
 */
function outils_wheel_scroll(degrees) {
    test.log("Outils - Scrolling on " + ":stackedWidget.centerWidget_QWidget");
    var receivingObject = waitForObject(":stackedWidget.centerWidget_QWidget");
    var x_pos = receivingObject.size.width/2; 
    var y_pos = receivingObject.size.height/2;
    var eights = degrees * 8;
    sendEvent("QWheelEvent", ":stackedWidget.centerWidget_QWidget", x_pos, y_pos, eights, Qt.NoModifier, Qt.RightButton);
    /*
     * Squish sendEvent(...) how to, used to send a scroll wheel event
     * @params  string  EventName
     *          object  Receiving widget
     *          int     object x coordinate
     *          int     object y coordinate
     *          int     wheel rotation in 1/8 °, positive to scroll up (away of the user)
     *          int     enum Qt::KeyboardModifier, 0 = Qt.NoModifier is no modifier key pressed
     *          int     enum Qt::MouseButton, Qt::LeftButton = 1, Qt::RightButton = 2, Qt::MidButton = 4
    sendEvent("QWheelEvent", waitForObject(":_QWidget"), 993, 542, -120, 0, 2);
     */
}


/**
 * @description Stops simulation without saving the exercise.
 */
function outils_stop_sim_no_save() {
    test.log("Outils - Stopping simulation");
    mouseClick(waitForObject(":FileViewer.fileFrame_QFrame"));
    clickButton(waitForObject(":fileFrame.quitButton_QPushButton"));
    //clickButton(waitForObject(":QuitMessageBox.Close_QPushButton"));
    clickButton(waitForObject(":stackedWidget.Exit_QPushButton")); //Ajout
}


/**@
 * @description Logs out the currently logged user
 *              Starts at Any view with the :MainWindow.menuBarWidget_QWidget visible
 *              Ends at UserConnectionView
 */
function outils_logoff(){
    test.log("Outils - Logging off");
    clickButton(waitForObject(":UserConnectionViewWidget.UserConnectionViewButton_QPushButton"));
}


/**
 * @description Closes the app
 *              Starts at Any view with the :MainWindow.menuBarWidget_QWidget visible
 *              Ends at App being closed
 */
function outils_close(){
    test.log("Outils - Closing Dental...");
    clickButton(waitForObject(":UserConnectionViewWidget.UserConnectionViewButton_QPushButton"));
}


/**
 * @description Wrapper to Sauish's snooze()
 */
function outils_snooze() {
    var seconds = 0;
    snooze(seconds);
}
