function play_se(){
	var warning = new Audio('warn.wav');
	var voice = new Audio('voice.mp3');
	warning.play();
	voice.play();
	navigator.vibrate([500, 500, 500, 500])
}

$(function(){
	//�y�[�W�ǂݍ��݂���������Ǝ��s

	// �u���E�U�o�b�N�֎~
	history.pushState(null, null, null);
	$(window).on('popstate', function(e){
		if (!e.orininalEvent.state){
			play_se();
			history.pushState(null, null, null);
			return;
		}
	})
	
	//���[�_���\��
	$('.modal').modal({dismissible: false});
	$('#alert').modal('open');
	$('#close').click(function(){
		$('#alert').modal('close');
		play_se();
	});

	//�[�����擾
	var device = navigator.userAgent.match(/Windows|Android|iPhone|iPad/);
	if(device == null){
		device = '�[��';
	}
	$('#device').text(device);
	
	// �J�E���g�_�E������
	var time = 200;
	setInterval(function(){
		time--;
		$('#timer').text(time);
	}, 1000);
});
