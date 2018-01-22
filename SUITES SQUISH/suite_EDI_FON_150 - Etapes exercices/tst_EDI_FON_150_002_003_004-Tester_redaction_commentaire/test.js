function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_3"), QEvent.MouseButtonPress, 89, 50, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_4"), QEvent.MouseButtonRelease, 89, 50, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 141, 105, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "Ceci est un commentaire");
    test.vp("VP1");
}
