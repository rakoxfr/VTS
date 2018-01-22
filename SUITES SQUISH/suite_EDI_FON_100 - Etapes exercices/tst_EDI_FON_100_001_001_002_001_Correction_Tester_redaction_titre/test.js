function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":titleLabel_QLabel"), 72, 1, 0, Qt.LeftButton);
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 566, 10, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 532, 12, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Titre");
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel"), QEvent.MouseButtonPress, 42, 34, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_2"), QEvent.MouseButtonRelease, 42, 34, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_3"), QEvent.MouseButtonPress, 25, 49, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 25, 49, Qt.LeftButton, 0, 0);
    test.vp("VP1");
}
