import React from "react";
import Image from "next/image";
import Witr1 from "/public/home/Witr1.png";
import Witr2 from "/public/home/Witr2.png";
import Salat3 from "/public/home/Salat3.png";

const WitrTabContent = () => {
  return (
    <div className="bg-[#FFF9EE] bg-opacity-100 rounded-md flex justify-center">
      <div className="relative bg-[#FFF9EE] bg-opacity-100 rounded-md p-8 flex justify-center">
        <div className="w-5/6 lg:w-2/5 flex justify-center flex-col">
          <div className="flex justify-center">
            <Image src={Witr1} alt="Your Image" className="" />
          </div>
          <p className="font-bold mt-10 text-left text-[#3E4974]">Step 1</p>
          <p className="mt-4 text-left leading-7 text-[#6E7697]">
            Begin with the proper niyyah (intention) that you want to pray
            salatul witr and decide how many rakat you will offer. This is not
            mandatory to say but just to give you an idea, “I intend to offer
            _____ rakats of the witr prayer.”
          </p>

          {/* Step 2 */}
          <p className="font-bold mt-10 text-[#3E4974]">Step 2</p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Pray the first two rakats just like a regular fardh salah. We cover
            this in our guide to learning how to pray salah. In the third Rakat
            of Witr prayer recite Surah Fatihah followed by a few verses from
            the Qur’an, then say the takbir “allahu akbar”. Instead of going
            down for Ruku raise your hands to your ear lobes and bring them back
            down to your naval.
          </p>

          {/* Step 3 */}
          <p className="font-bold mt-10 text-[#3E4974]">Step 3</p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Here it is Sunnah to recite the witr dua known as qunoot or
            dua-e-qunoot. There are two variations which are recorded and either
            is acceptable.
            <span className="primary-color" style={{ display: 'block', marginTop: '15px', marginBottom: '15px' }}>
              اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ
              وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ
              وَقِنِي شَرَّ مَا قَضَيْتَ فَإِنَّكَ تَقْضِي وَلاَ يُقْضَى
              عَلَيْكَ وَإِنَّهُ لاَ يَذِلُّ مَنْ وَالَيْتَ تَبَارَكْتَ رَبَّنَا
              وَتَعَالَيْتَ
            </span>
            Allahumma ihdini feeman hadayt, wa a’fini fiman afait, wa tawallani
            fiman tawallait, wa barik Li fima atait, wa qini sharra ma qadait,
            fa Innaka taqdi wa la yuqda Alaik, wa innahu la yadhillu man walait,
            tabarakta Rabbana wa ta’alait.Meaning: O Allah guide me among those
            You have guided, pardon me among those You have pardoned, befriend
            me among those You have befriended, bless me in what You have
            granted, and save me from the evil that You decreed. Indeed You
            decree, and none can pass decree, and none can pass decree upon You,
            indeed he is not humiliated whom You have befriended, blessed are
            You our Lord and Exalted. The above is generally the more accepted
            dua for Witr, the Hanafi commonly recite the version below.
            <span className="primary-color" style={{ display: 'block', marginTop: '15px', marginBottom: '15px' }}>
            اَللَّهُمَّ إنا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ
            وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِئْ عَلَيْكَ الخَيْرَ وَنَشْكُرُكَ
            وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ ئَّفْجُرُكَ اَللَّهُمَّ
            إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّئ وَنَسْجُدُ وَإِلَيْكَ نَسْعأئ
            وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشآئ عَذَابَكَ إِنَّ عَذَابَكَ
            بِالكُفَّارِ مُلْحَقٌ 
            </span>
            Allahumma inna nasta-eenoka wa nastaghfiruka
            wa nu’minu bika wa natawakkalu alaika wa nusni alaikal khair, wa
            nashkuruka wala nakfuruka wa nakhla-oo wa natruku mai yafjuruka,
            Allah humma iyyaka na’budu wa laka nusalli wa nasjud wa ilaika nas
            aaa wa nahfizu wa narju rahma taka wa nakhshaa azaabaka inna
            azaabaka bil kuffari mulhik Meaning: O Allah! We invoke you for
            help, and beg for forgiveness, and we believe in you and have trust
            in you and we praise you, in the best way we can; and we thank you
            and we are not ungrateful to you, and we forsake and turn away from
            the one who disobeys you. O Allah! We worship you and prostrate
            ourselves before you, and we hasten towards you and serve you, and
            we hope to receive your mercy and we dread your torment. Surely, the
            disbelievers shall incur your torment. If you wish to follow the
            Sunnah of the Prophet you can recite the Witr duas above. But this
            is not obligatory. You can substitute with any dua if you find the
            ones above difficult to learn. An easier one to begin with is
            rabanna atina fid dunya dua. It is, however, recommended to complete
            Witr according to Sunnah for the most blessings. This includes
            taking the the time out to memorize the qunut dua..
          </p>

          {/* Step 4 */}
          <p className="font-bold mt-10 text-[#3E4974]">Step 4</p>
          <p className="mt-4 text-[#6E7697] leading-7">
            After finishing the invocation, continue with salat in the regular
            manner and finish with tasleem.
          </p>
          {/* Step 5 */}
          <p className="font-bold mt-10 text-[#3E4974]">Step 5</p>
          <p className="mt-4 text-[#6E7697] leading-7">
            For the three rakat of Witr, it is the Sunnah of Prophet Muhammad
            (ﷺ) to recite Surah Al-A’la (chapter 87) for first rakat, Surah Al
            Kafirun (chapter 109) in the second, and then Surah Ikhlas (chapter
            112) in the final rakat. [9,10] Stress again, this is not mandatory
            but the Sunnah of the Prophet.
          </p>
        </div>
        {/* Image at the right side */}
        <div className="absolute bottom-1/2 right-0 transform -translate-y-1/2">
          <Image src={Salat3} alt="Image Description" className="w-auto h-50 hidden md:block" />
        </div>

        {/* Image at 2/3 of the vertical position */}
        <div className="absolute bottom-1/3 right-0 transform translate-y-1/3">
          <Image src={Witr2} alt="Image Description" className="w-21 h-auto hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default WitrTabContent;
