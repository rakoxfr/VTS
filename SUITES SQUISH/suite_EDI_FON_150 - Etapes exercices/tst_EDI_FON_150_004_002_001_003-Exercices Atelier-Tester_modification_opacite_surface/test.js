function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Workshop exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel"), QEvent.MouseButtonPress, 43, 54, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_7"), QEvent.MouseButtonRelease, 43, 54, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Surface_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), "P:/TP LPTQL/SolidEditor/resources/workshop/stl/dentine.stl");
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 523, -11, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    mouseDrag(waitForObject(":qt_spinbox_lineedit_QLineEdit"), 0, 11, 71, 4, 1, Qt.LeftButton);
    type(waitForObject(":opacityDoubleSpinBox_QDoubleSpinBox"), "<Keypad_1>");
    type(waitForObject(":opacityDoubleSpinBox_QDoubleSpinBox"), "<Keypad_0>");
    type(waitForObject(":opacityDoubleSpinBox_QDoubleSpinBox"), "<Keypad_0>");
    test.vp("VP4");
    mouseDrag(waitForObject(":qt_spinbox_lineedit_QLineEdit"), 3, 8, 22, 2, 1, Qt.LeftButton);
    type(waitForObject(":opacityDoubleSpinBox_QDoubleSpinBox"), "<Keypad_1>");
    type(waitForObject(":opacityDoubleSpinBox_QDoubleSpinBox"), "<Keypad_2>");
    test.vp("VP1");
}
