function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    spinDown(waitForObject(":projectSelectionGroupBox.levelSpinBox_QSpinBox"));
    doubleClick(waitForObject(":projectSelectionGroupBox.levelSpinBox_QSpinBox"), 274, 25, 0, Qt.LeftButton);
    spinDown(waitForObject(":projectSelectionGroupBox.levelSpinBox_QSpinBox"));
    doubleClick(waitForObject(":projectSelectionGroupBox.levelSpinBox_QSpinBox"), 274, 25, 0, Qt.LeftButton);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_5"), QEvent.MouseButtonPress, 119, 6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_6"), QEvent.MouseButtonRelease, 119, 6, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_11"), QEvent.MouseButtonPress, 82, 50, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 82, 50, Qt.LeftButton, 0, 0);
    test.vp("VP1");
}
