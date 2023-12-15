import React from "react";
import Image from "next/image";
import Salat1 from "/public/home/Salat1.png";
import Salat2 from "/public/home/Salat2.png";
import Salat3 from "/public/home/Salat3.png";

const SalatTabContent = () => {
  return (
    <div className="bg-[#FFF9EE] bg-opacity-100 rounded-md flex justify-center">
      <div className="relative bg-[#FFF9EE] bg-opacity-100 rounded-md py-8 flex justify-center">
        <div className="w-5/6 lg:w-2/5 flex justify-center flex-col">
          <div className="flex justify-center">
            <Image src={Salat1} alt="Your Image" className="" />
          </div>

          <p className="font-bold mt-10 text-left text-[#3E4974]">
            Step 1 – Make your intention to pray
          </p>
          <p className="mt-4 text-left leading-7 text-[#6E7697]">
            We first began the prayer by making an intention from the heart to
            pray to Allah. As soon as you begin, your entire focus should be on
            the prayer itself and nothing else.
          </p>

          {/* Step 2 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 2 – Raise your hands to your ears and say ‘Allahu Akbar”
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            The moment you say “Allahu Akbar” the prayer will officially begin.
            From this point forward you should focus wholeheartedly on the
            prayer and do your best to ignore all distractions.
          </p>
          {/* <div class="w-660.66 h-110 bg-yellow-300 border border-black flex flex-col justify-end p-4">
          <div class="w-full h-6 border border-black"></div>
          <div class="flex justify-between mt-4">
            <button class="w-8 h-8 bg-black rounded-full"></button>
            <button class="w-8 h-8 bg-black rounded-full"></button>
            <button class="w-8 h-8 bg-black rounded-full"></button>
          </div>
        </div> */}

          {/* Step 3 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 3 – Lower your hands and place them over your naval. Your right
            hand should be placed over your left hand
          </p>

          {/* Step 4 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 4 – Keep your eyes focused on the ground in front of you
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Prophet Muhammad (peace be upon him) said that while you praying
            your eyes should always look to where you will prostrate.
          </p>
          {/* Step 5 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 5 – Recite the opening chapter of the Qur’an
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            The first chapter of the Qur’an is called Surah Fatihah. You will
            begin by saying this Arabic phrase: A’auodu billaahi
            minash-shaytaanir rajeem ‘I seek refuge in Allah from the accursed
            Shaytan (devil).’ And then begin to recite the chapter verse by
            verse in Arabic: Bismillaahir ar-Rahmani ar-Raheem Al hamdu lillaahi
            rabbil ‘alameen Ar-Rahmani ar-Raheem Maaliki yawmid deen Iyyaaka
            na’aboodu wa iyyaaka nasta’een Ihdeenas siraatal mustaqeem Siraatal
            ladheena an ‘amta’ alayhim Ghayril maghduubi’ alayhim waladawleen
          </p>
          {/* Step 6 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 6 – Bow down. This is known as the ‘ruku’
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            As you are bowing down say ‘Allahu Akbar’. Make sure to keep your
            back straight, your hands on your knees, and your eyes focused on
            the ground where you will be prostrating. When you are in this
            position you will say this sentence three times: Subhanna rabbeeyal
            adheem
          </p>
          {/* Step 7 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 7 – Return to standing up again
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            As you are rising up from the ruku position to a standing position
            you will bring your hands to your ears and will say: Samee Allahu
            leeman hameeda ‘Allah hears those who praise him’
          </p>
          {/* Step 8 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 8 – Go down to perform prostration. This is known as ‘sujud’
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            As you are moving into this position say Allahu Akbar. And also make
            sure your forehead, nose, palms of both hands, knees, and both toes
            are touching the ground.
          </p>
          {/* Step 9 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 9 – Say this phrase while in sujud (prostration)
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Say this sentence three times: Subhanna rabbeeyal ‘alaa How perfect
            is my Lord, the Most High
          </p>
          {/* Step 10 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 10 – Rise up from sujud and sit for a moment
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Say Allahu akbar as you rise from sujud and then sit on your left
            leg. Your left foot will rest on the floor while your right foot is
            upright. Place your hands on your knees.When you are in this
            position it is recommended to ask Allah for forgiveness. A simple
            and easy dua you can say is: Rabbigh-fir lee O my Lord, forgive me.
          </p>
          {/* Step 11 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 11 – Return to the position of sujud
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            You will repeat step 9 again and perform a second sujud and say
            subhanna rabbeeyal ‘alaa three times again.
          </p>
          {/* Step 12 */}
          <p className="font-bold mt-10 text-[#3E4974]">
            Step 12 – Arise from the sujud to return to the standing position
            and say Allahu Akbar
          </p>
          <p className="mt-4 text-[#6E7697] leading-7">
            Congratulations, you have just completed one full rakah! The first
            rakah of every prayer is performed with these twelve steps.
          </p>
        </div>
        {/* Image at the right side */}
        <div className="absolute bottom-1/2 right-0 transform -translate-y-1/2">
          <Image
            src={Salat3}
            alt="Image Description"
            className="w-auto h-50 hidden md:block"
          />
        </div>

        {/* Image at 2/3 of the vertical position */}
        <div className="absolute bottom-1/3 right-0 transform translate-y-1/3">
          <Image
            src={Salat2}
            alt="Image Description"
            className="w-21 h-auto hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SalatTabContent;
