var sozler = ["Ak Akçe Kara Gün İçindir",
    "Sakla Samanı Gelir Zamanı",
    "Üzüm üzüme baka baka kararır.",
    "Agılda oğlak doğsa, Ovada otu biter.",
    "Abanın kadri yağmurda bilinir.",
    "Çabalama ile çarık yırtılır",
    " Aba vakti aba, yaba vakti yaba alan yanılmaz.",
    " Abanın kadri, yağmurda bilinir.",
    " Abdal abdalın ne umduğunu, ne bulduğunu ister.",
    " Abdal ata binmiş bey oldum sanmış.",
    " Abdal düğünden, çocuk oyundan usanmaz.",
    " Abdala kar yağıyor demişler, titremeye hazırım demiş.",
    " Abdalın arkadaşlığı yol görününceye kadardır.",
    " Abdalın karnı doyunca gözü pabucundadır.",
    " Abdestsiz sofuya namaz dayanmaz.",
    " Acele giden ecele gider.",
    " Acele işe, şeytan karışır.",
    " Acele yürüyen yolda kalır.",
    " Acemi katır kapı önünde yük indirir.",
    " Acemi marangozun talaşı tahtasından çok olur.",
    " Acemi nalbant gibi kâh nalına vurur, kâh mıhına.",
    " Acı acıyı bastırır, su sancıyı.",
    " Acı patlıcanı kırağı çalmaz.",
    " Acı söz insanı dininden çıkarır, tatlı söz yılanı deliğinden çıkarır.",
    " Acıkan doymam, susayan kanmam sanır.",
    " Acıkan yanağından, susayan dudağından belli olur.",
    " Acındırırsan arsız, acıktırırsan hırsız olur.",
    " Aç ayı oynamaz.",
    " Aç aman bilmez, çocuk zaman bilmez.",
    " Aç bırakma hırsız edersin, çok söyleme arsız edersin.",
    " Aç doymam, tok acıkmam sanır.",
    " Aç koyma hırsız olur, çok söyleme yüzsüz olur, çok değme arsız olur.",
    " Aç koynunda azık durmaz.",
    " Aç köpek fırın deler.",
    " Aç kurt arslana saldırır.",
    " Aç tavuk rüyasında kendini buğday ambarında görür.",
    " Aç tokun halinden anlamaz.",
    " Aça dokuz yorgan örtmüşler, yine uyuyamamış.",
    " Açık yaraya kurt düşmez.",
    " Açık ağız aç kalmaz.",
    " Açık yerde tepecik kendini dağ sanır.",
    " Açılan solar, ağlayan güler.",
    " Açın imanı olmaz.",
    " Açın karnı doyar gözü doymaz.",
    " Açlık ile tokluğun arası bir dilim ekmek.",
    " Açtırma kutuyu, söyletme kötüyü.",
    " Adam adamdır olmasa da pulu, eşek eşektir olsa da çulu.",
    " Adam eşeğinden, kadın döşeğinden belli olur.",
    " Adam kıtlığında keçiye Abdurrahman Çelebi derler.",
    " Adam olana bir söz yeter.",
    " Adam sandık eşeği, altına serdik döşeği.",
    " Adam yenilmekle marifetli olur, yanılmakla âlim.",
    " Adamak kolay, ödemek güçtür.",
    " Adamakla mal tükenmez.",
    " Adamın iyisi iş başında belli olur.",
    " Adı çıkacağına canı çıksın.",
    " Adı çıktı dokuza, inmez sekize.",
    " Ağaç kökünden yıkılır.",
    " Ağaç ne kadar meyve verirse, dalı o kadar yere eğilir.",
    " Ağaç ne kadar uzarsa uzasın göğe değmez.",
    " Ağaç ne kadar yüksek olsa da yaprakları yere düşer.",
    " Ağaç ucuna yel değer, güzel kişiye söz değer.",
    " Ağaç yaşken eğilir.",
    " Ağaca balta vurmuşlar sapı bendendir demiş.",
    " Ağaca beşikten mezara kadar muhtacız.",
    " Ağaca çıkan keçinin dama çıkan oğlağı olur.",
    " Ağaca çıkan keçinin dala bakan oğlağı olur.",
    " Ağaca dayanma çürür, insana güvenme ölür.",
    " Ağacı kurt, insanı dert bitirir.",
    " Ağaçlı köyü su basmaz.",
    " Ağaçsız memleket duvaksız geline benzer.",
    " Ağaçtan maşa, aptaldan paşa olmaz.",
    " Ağaran baş, ağlayan göz gizlenmez.",
    " Ağır baş iyidir, yenlik olsa uçar.",
    " Ağır git ki yol alasın.",
    " Ağır kazan geç kaynar.",
    " Ağır otur, batman götür.",
    " Ağır taş batman döver.",
    " Ağır taş yerinden oynamaz.",
    " Ağız yemeyince yüz utanmaz.",
    " Ağlama ölü için, ağla deli için.",
    " Ağlamayan çocuğa meme vermezler.",
    " Ağlarsa anam ağlar, gerisi yalan ağlar.",
    " Ağlayak da gözden mi olak?",
    " Ağlayanın malından gülene hayır gelmez.",
    " Ağrısız baş mezarda olur.",
    " Ağustos ayında beyni kaynayanın, zemheride Zahmarıda kazanı kaynar.",
    " Ağustosta beynin kaynasın, kışın da tencere kaynasın.",
    " Ağzı açık ayran delisi.",
    " Ağzına bir zeytin verir, ardına tulum tutar.",
    " Ağzından bal akıyor.",
    " Ah alan unmaz, ah yerde kalmaz.",
    " Ahmak misafir, ev sahibini ağırlar.",
    " Ak akçe kara gün içindir.",
    " Ak gün ağartır‚ kara gün karartır.",
    " Ak ile kara dere kenarında belli olur.",
    " Ak koyunun kara kuzusu da olur.",
    " Ak köpeğe koyun diye sarılma.",
    " Akan su yosun tutmaz.",
    " Akan su, pis tutmaz.",
    " Akçe bulsam, çıkı yok.",
    " Akıl, akıldan üstündür.",
    " Akıl para ile satılmaz.",
    " Akıl yaşta değil baştadır.",
    " Akıl yiğide sermayedir.",
    " Akılı olmayana neylesin sakal, kayışı tarladan götürür çakal.",
    " Akıllı düşünene kadar, deli oğlunu evermiş, torunu olmuş.",
    " Akıllı olan katar katar yer, akılsız olan satar satar yer.",
    " Akılsız başın cezasını ayaklar çeker.",
    " Akılsız köpeği yol kocatır.",
    " Akılsızın şaşkını beyaz giyer kış günü.",
    " Akıntıya kürek çekme, kurak yere ekin ekme.",
    " Akranıyla konuşmayanın sesi, semadan gelir.",
    " Akşam gelen misafirin, yiyeceği bulgur sıkısı, yatacağı ahır sekisi.",
    " Akşamın hayrından sabahın şerri iyidir.",
    " Al elmaya taş atan çok olur.",
    " Al malın iyisini çekme kaygısını.",
    " Al yakışırken, el bakışırken.",
    " Alacağın bir iğne, çeliğin okkasını orantıya vurursun.",
    " Alçak tavuk kendini ferik gösterir.",
    " Alışmış kudurmuştan beterdir.",
    " Alim unutmuş, kalem unutmamış.",
    " Allah aptala eşeğini kaybettirir, sonra buldurup sevindirirmiş.",
    " Allah dağına göre kar verir.",
    " Allah şaşırttı mı, dayıya hala dedirtirmiş.",
    " Allı yelek, pullu yelek, canfes neye gerek?",
    " Alma el kızının ahını, gökten indirir şahini.",
    " Alma mazlumun ahını, çıkar aheste aheste.",
    " Alma mazlumun ahını, gökden indirir şahını.",
    " Almadan vermek Allaha mahsustur.",
    " Almak kolay ödemek zordur.",
    " Altın anahtar, her kapıyı açar.",
    " Altın eşik, ağaç eşiğe muhtaçtır.",
    " Altın kılıç demir kapıyı açar.",
    " Altın yere düşmekle pul olmaz.",
    " Altının değerini sarraf bilir.",
    " Ana gibi yâr, Bağdat gibi diyar olmaz.",
    " Anan gibi saç büyüteceğine, baban gibi bıyık büyüt.",
    " Anan turp, baban şalgam, sen içinde gülbe şeker.",
    " Ananın bastığı yavru incinmez.",
    " Ananın bastığı yerde yavru ölmez.",
    " Anasına bak kızını al, astarına bak bezini al.",
    " Anasına bak kızını al, kenarına bak bezini al.",
    " Anlayana sivrisinek saz, anlamayana davul zurna az.",
    " Aptalın karnı doyunca gözü yolda olur.",
    " Ar gözden, kâr yüzden anlaşılır.",
    " Ar namus hak getire.",
    " Arap eli öpmek, dudak karartmaz.",
    " Arayan belasını da devasını da bulur.",
    " Arayan bulur, inleyen ölür.",
    " Arefe günü yalan söyleyenin, bayram günü yüzü kara çıkar.",
    " Arı bal yapacak çiçeği bilir.",
    " Arı kahrını çekmeyen balın kadrini ne bilir.",
    " Arı satmış namusu tellala vermiş.",
    " Arkadaş dediğinin gölgesinde suç işlenir.",
    " Arkadaşını söyle ki, sana kim olduğunu söyleyeyim.",
    " Arkalı it kurdu boğar.",
    " Armudu sapıyla, üzümü çöpüyle, pekmezi küpüyle.",
    " Arpa eken darı biçmez.",
    " Arpa ekip buğday bekleme.",
    " Asıl azmaz, bal kokmaz kokarsa yağ kokar, onun da aslı ayrandır.",
    " Aslan yattığı yerden belli olur.",
    " Aslı neyse nesli odur.",
    " Aslına çekmeyen haramzadedir.",
    " Aslında olan tırnağına getirir.",
    " Aslını inkâr eden haramzâdedir.",
    " Aslını inkâr edenin nesli gevşek olur.",
    " Aş kaşık ile, iş keşik ile.",
    " Aş sabahın iş sabahın.",
    " Aşağı tükürsen sakal, yukarı tükürsen bıyık.",
    " Aşk olmayınca meşk olmaz.",
    " At alırsan yazın, deve alırsan güzün, avrat alırsan gezin ha gezin.",
    " At binenin kılıç kuşananındır.",
    " At ile avrat yiğidin ikbalindendir.",
    " At karnından yiğit burnundan bellidir.",
    " At olacak tay yürüyüşünden belli olur.",
    " At ölür itlere bayram olur.",
    " At ölür meydan kalır, yiğit ölür şan kalır.",
    " At ver hasım ol, kız ver hısım ol.",
    " At yedi günde, it yediği günde unutur.",
    " At, sahibine göre kişner.",
    " Ata binmek bir ayıp, inmek iki ayıp.",
    " Ata et, ite ot verilmez.",
    " Ata sözü tutmayan, uluya uluya kalır.",
    " Ateş düştüğü yeri yakar.",
    " Ateş ile barut bir arada olmaz.",
    " Ateş olmayan yerden duman çıkmaz.",
    " Atı alan Üsküdarı geçti.",
    " Atılan ok geri dönmez.",
    " Atımın anlı sakar, lakabını ele takar.",
    " Atın iyisi arkadan gelmez.",
    " Atın iyisine doru, yiğidin iyisine deli derler.",
    " Atın ölümü arpadan olsun.",
    " Atlar tepişirken arada eşekler ezilir.",
    " Atlı, itli sığmış, bir çocuk sığmamış.",
    " Attan düşen kaba döşek, eşekten düşen kazma kürek.",
    " Attan düşen ölmez, eşekten düşen ölür.",
    " Attan indi eşeğe bindi.",
    " Avradı er zapt etmez, ar zapt eder.",
    " Avrat var ev yapar, avrat var ev yıkar.",
    " Ay bozmaz, süt kokmaz.",
    " Ayağa değmedik taş, başa gelmedik iş olmaz.",
    " Ayağın sığmayacağı yere baş sokulmaz.",
    " Ayağını yorganına göre uzat.",
    " Aydan gelen halı üstüne, günde gelen kül üstüne.",
    " Ayranım ekşidir diyen olmaz.",
    " Az kazanan çok kazanır, çok kazanan hiç kazanır.",
    " Az menfaat çok zarara mal olur.",
    " Az sabırda, çok keramet vardır.",
    " Az tamah, çok ziyan getirir.",
    " Az veren candan, çok veren maldan verir.",
    " Az yaşa, uz yaşa, akıbet gelecek başa.",
    " Azan mevlasını da bulur, belasını da.",
    " Azı bilmeyen çoğu hiç bilmez.",
    " Azıcık aşım, kaygısız başım.",
    " Azıksız yola çıkanın, iki gözü el torbasında olur.",
    " Azmış, kudurmuştan beterdir.",


]
function gunun_sozu() {
    var rastgele_soz_numarasi = Math.floor(Math.random() * sozler.length);
    document.getElementById("gunun_sozu_alani").innerHTML = sozler[rastgele_soz_numarasi];
}