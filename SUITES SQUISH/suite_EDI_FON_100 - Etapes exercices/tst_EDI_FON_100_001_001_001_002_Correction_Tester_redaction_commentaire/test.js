function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":titleLabel_QLabel"), 85, 4, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 167, 215, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "Commentaire");
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_5"), QEvent.MouseButtonPress, 86, 7, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 86, 7, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel"), QEvent.MouseButtonPress, 62, 17, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_5"), QEvent.MouseButtonRelease, 62, 17, Qt.LeftButton, 0, 0);
    test.vp("VP1");
}
