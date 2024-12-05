"use client";
function Header() {
  return (
    <div className="bg-green-700 flex items-center justify-between px-4 py-2 flex-wrap">
      {/* Contact Details */}
      <div className="text-white font-bold gap-2 md:gap-5 flex flex-col md:flex-row">
        {/* Visible on larger screens */}
        <div className="hidden md:block">
          Email: qarizafar8833@gmail.com
        </div>
        <div className="hidden md:block">
          Phone: +92313-8833-130
        </div>
        <div className="hidden md:block">
          WhatsApp: +92300-8833-130
        </div>

        {/* Visible on mobile screens */}
        <div className="md:hidden text-sm text-center space-y-1 ">
          <div>Email: qarizafar8833@gmail.com</div>
          <div>Phone: +92313-8833-130</div>
          <div>WhatsApp: +92300-8833-130</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
