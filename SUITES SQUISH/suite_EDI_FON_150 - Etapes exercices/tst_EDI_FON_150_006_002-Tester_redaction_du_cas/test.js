function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 121, 216, 0, Qt.LeftButton);
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "Présentation");
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_6"), QEvent.MouseButtonPress, 103, 15, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_7"), QEvent.MouseButtonRelease, 103, 15, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_11"), QEvent.MouseButtonPress, 71, 47, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 71, 47, Qt.LeftButton, 0, 0);
    test.vp("VP1");
}
