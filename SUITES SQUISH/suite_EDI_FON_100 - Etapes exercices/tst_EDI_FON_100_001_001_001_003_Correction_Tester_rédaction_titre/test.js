function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_2"), QEvent.MouseButtonPress, 37, 7, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_3"), QEvent.MouseButtonRelease, 37, 7, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_4"), QEvent.MouseButtonPress, 39, 0, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel"), QEvent.MouseButtonRelease, 39, 0, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 609, 8, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Titre");
    mouseClick(waitForObject(":imgLabel_QLabel_5"), 78, 13, 0, Qt.LeftButton);
    mouseClick(waitForObject(":imgLabel_QLabel"), 128, 8, 0, Qt.LeftButton);
    test.vp("VP1");
}
