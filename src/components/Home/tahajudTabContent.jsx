import React from "react";
import Image from "next/image";
import Tahajud1 from "/public/home/Tahajud1.png";
import Tahajud2 from "/public/home/Tahajud2.png";
import Salat3 from "/public/home/Salat3.png";

const TahajudTabContent = () => {
  return (
    <div className="bg-[#FFF9EE] bg-opacity-100 rounded-md flex justify-center">
      <div className="relative bg-[#FFF9EE] bg-opacity-100 rounded-md p-8 flex justify-center">
        <div className="w-5/6 lg:w-2/5 flex justify-center flex-col">
          <div className="flex justify-center">
            <Image src={Tahajud1} alt="Your Image" className="" />
          </div>
          <p className="font-bold mt-10 text-left text-[#3E4974]">
            Step 1 – Arrange to wake up after midnight
          </p>
          <p className="mt-4 text-left leading-7 text-[#6E7697]">
            After praying the Isha prayer and before going to sleep, make
            arrangements to wake up during the night before the Fajr prayer (for
            instance, you may want to set an alarm clock or have a family member
            agree to wake you).
          </p>

          {/* Step 2 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 2 – Wake up and perform Wudu.
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Wake up during the night at the time you've chosen. Once you wake,
            perform Wudu, the ritual ablution Muslims use to cleanse themselves
            before they pray or handle the Holy Quran.
          </p>

          {/* Step 3 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 3 – Go somewhere clean, quiet, and dignified to conduct your
            prayer.
          </p>

          {/* Step 4 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 4 – Remove all worldly worries from your heart.
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            At the time of prayer, calmly focus and reflect on the glory of
            Allah. Do not worry about fleeting worldly problems that are
            ultimately meaningless in comparison to the infinite wisdom and
            mercy of Allah. Calm yourself and ignore any negative or distracting
            thoughts or feelings. Close your eyes and focus your attention on
            your heart as you begin to achieve a heightened state of spiritual
            awareness and a feeling of closeness to Allah.
          </p>
          {/* Step 5 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 5 – Make your intention (niyyah) to pray
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Generally, two rakats is seen as the minimum necessary for a proper
            Tahajjud. However, it's possible to repeat many more if you wish.
            For instance, according to the Hadiths, the Prophet Muhammad
            frequently prayed up to thirteen rakats including Witr.[5] Tahajjud
            is always performed in pairs of rakats and eight is seen as a good
            number by many Muslims. Most people will say two, four, six, eight
            or twelve rakats, though more is not discouraged and the more you
            pray the more rewards are available.
          </p>
          {/* Step 6 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 6 – Perform two rakats
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            To begin your Tahajjud, start by performing two quick rakats
            (cycles) of Salah. Salah begins by standing and reciting verses from
            the Holy Quran. Then, the person praying continues by bowing low
            with his hands on his knees, then prostrating on the ground with his
            forehead, nose, and palms on the floor and his elbows raised,
            sitting on his knees with his feet folded under him, and finally
            standing and reciting "Allahu Akbar."
          </p>
          {/* Step 7 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 7 – Perform more rakats in pairs according to your niyyah
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Generally, two rakats is seen as the minimum necessary for a proper
            Tahajjud. However, it's possible to repeat many more if you wish.
            For instance, according to the Hadiths, the Prophet Muhammad
            frequently prayed up to thirteen rakats including Witr.[5] Tahajjud
            is always performed in pairs of rakats and eight is seen as a good
            number by many Muslims. Most people will say two, four, six, eight
            or twelve rakats, though more is not discouraged and the more you
            pray the more rewards are available.
          </p>
          {/* Step 8 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 8 – Add your own prayers (dua) after you've completed the
            number of rakats you set out to pray.
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Make sure that they are sincere, respectful, and done in complete
            devotion to Allah. These may be offered in extended prostration in
            your own words and language. You may want to offer additional thanks
            and praise to Allah, pray for strength and guidance, or make a
            special request for help. For instance, you may ask for blessings
            for a friend who is suffering through difficult times or help to
            strengthen your faith or simply spend a few moments thanking Allah
            for a blessing that He granted you the previous day. Prayers should
            be offered with humbleness, fear, hope, and patience. This is an
            ideal time to ask for forgiveness for your mistakes and sins as
            Allah is especially open to our repentance at night according to
            many hadeeth.
          </p>
          {/* Step 9 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 9 – Go back to bed if you become too tired to complete the
            Tahajjud
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Because the Tahajjud interrupts your normal sleep, it's not unlikely
            that you may be somewhat tired when you first attempt the prayer.
            If, however, you're so tired that you find yourself forgetting what
            you're saying as you recite your prayers or you doze off in the
            middle of your Tahajjud, don't attempt to complete the prayer. In
            this case, according to several ahadith, Allah notes your sincere
            willingness to complete the Tahajjud. You may go back to sleep
            without any need to be embarrassed or ashamed, but try to better
            prepare yourself next time, perhaps by going to bed earlier.
          </p>
        </div>
        {/* Image at the right side */}
        <div className="absolute bottom-1/2 right-0 transform -translate-y-1/2">
          <Image src={Salat3} alt="Image Description" className="w-auto h-50 hidden md:block" />
        </div>

        {/* Image at 2/3 of the vertical position */}
        <div className="absolute bottom-1/3 right-0 transform translate-y-1/3">
          <Image
            src={Tahajud2}
            alt="Image Description"
            className="w-21 h-auto hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default TahajudTabContent;
