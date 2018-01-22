function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_3"), QEvent.MouseButtonPress, 69, 57, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 69, 57, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    test.vp("VP1");
}
