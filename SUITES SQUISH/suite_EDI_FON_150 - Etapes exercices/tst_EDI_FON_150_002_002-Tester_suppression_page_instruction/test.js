function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_3"), QEvent.MouseButtonPress, 99, 49, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 98, 49, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 554, 4, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "test");
    mouseClick(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 169, 73, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "page à supprimer");
    clickButton(waitForObject(":ContentTabView.deletePagePushButton_QPushButton"));
    test.vp("VP1");
}
