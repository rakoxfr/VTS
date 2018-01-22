function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_5"), QEvent.MouseButtonPress, 124, 16, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_6"), QEvent.MouseButtonRelease, 124, 16, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 546, 13, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Ceci est un titre");
    test.vp("VP1");
}
