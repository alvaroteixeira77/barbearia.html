const dateInput = document.getElementById('data');
const today = new Date().toISOString().split('T');
dateInput.setAttribute('min', today);

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const barbeiro = document.getElementById('barbeiro').value;
    const dataRaw = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    const [ano, mes, dia] = dataRaw.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const telefoneBarbearia = "5542999999999";

    const mensagem = `Fala Lucas, beleza? Quero marcar um horário na EVOM BARBER:\n\n` +
                     `*Nome:* ${nome}\n` +
                     `*Serviço:* ${servico}\n` +
                     `*Profissional:* ${barbeiro}\n` +
                     `*Data:* ${dataFormatada}\n` +
                     `*Horário:* ${hora}`;

    const url = `https://wa.me{telefoneBarbearia}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});
