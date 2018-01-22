function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Workshop exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_2"), QEvent.MouseButtonPress, 81, 15, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_9"), QEvent.MouseButtonRelease, 81, 15, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Surface_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[1], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 531, -6, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    mouseClick(waitForObject(":qt_spinbox_lineedit_QLineEdit"), 12, 7, 0, Qt.LeftButton);
    mouseDrag(waitForObject(":qt_spinbox_lineedit_QLineEdit"), 6, 8, 27, 1, 1, Qt.LeftButton);
    type(waitForObject(":opacityDoubleSpinBox_QDoubleSpinBox"), "<Keypad_0>");
    test.vp("VP1");
}
