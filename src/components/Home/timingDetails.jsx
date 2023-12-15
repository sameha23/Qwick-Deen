import Image from "next/image";
import fajr from "/public/home/fajr.png";
import zuhr from "/public/home/zuhr.png";
import asr from "/public/home/asr.png";
import maghrib from "/public/home/maghrib.png";
import isha from "/public/home/isha.png";

const PrayerTimeCard = ({ prayerTime, azan, iqama, imageSrc }) => {
  return (
    <div className="relative w-[200px] h-[200px] bg-[#EBF6EE] cornerRadius">
      {/* U-shaped box */}
      <div className="w-full h-1/4 flex justify-center items-center mt-12">
        {/* Circle with icon */}
        <div className="w-14 h-14 bg-[#F2C555] rounded-full flex items-center justify-center">
        <Image src={imageSrc} alt="icon" width={23} height={23} />
        </div>
      </div>
      <h3 className="text-lg mt-3 text-center font-bold">{prayerTime}</h3>
      <p className="font-bold text-gray-500 text-center text-sm">
        Azan: {azan}
      </p>
      <p className="font-bold text-gray-600 text-center text-sm">
        Iqama: {iqama}
      </p>
    </div>
  );
};

export default function PrayerTimings() {
  return (
    <div className="flex justify-center mt-3 gap-4 flex-wrap">
      {/* Repeat this component for each prayer time */}
      <PrayerTimeCard
        prayerTime="FAJR"
        azan="4.45 am"
        iqama="4.45 am"
        imageSrc={fajr}
      />
      <PrayerTimeCard
        prayerTime="ZUHUR"
        azan="12.45 am"
        iqama="01.30 pm"
        imageSrc={zuhr}
      />
      <PrayerTimeCard
        prayerTime="ASR"
        azan="4.45 pm"
        iqama="4.45 pm"
        imageSrc={asr}
      />
      <PrayerTimeCard
        prayerTime="Magrib"
        azan="4.45 am"
        iqama="4.45 am"
        imageSrc={maghrib}
      />
      <PrayerTimeCard
        prayerTime="ISHA"
        azan="4.45 am"
        iqama="4.45 am"
        imageSrc={isha}
      />
      {/* Other PrayerTimeCard components */}
      {/* ... */}
    </div>
  );
}
