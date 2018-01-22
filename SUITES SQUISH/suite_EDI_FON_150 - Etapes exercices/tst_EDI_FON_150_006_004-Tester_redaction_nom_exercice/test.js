function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":projectSelectionGroupBox.titleEdit_QLineEdit"), 581, 15, 0, Qt.LeftButton);
    type(waitForObject(":projectSelectionGroupBox.titleEdit_QLineEdit"), "Titre");
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_3"), QEvent.MouseButtonPress, 84, 29, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 84, 29, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_11"), QEvent.MouseButtonPress, 106, 48, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 106, 48, Qt.LeftButton, 0, 0);
    test.vp("VP1");
}
