import React from "react";

const Terms = () => {
  return (
    <section className="mx-auto mt-32 flex flex-col items-center min-h-screen max-w-7xl px-6 lg:px-12 overflow-hidden">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
      </div>

      <h2 className="font-bold py-4">
        What cannot be uploaded to our servers:
      </h2>
      <ul>
        <li>
          - Copyrighted images if you do not own the copyright and are not
          licensed to do so.
        </li>
        <li>
          - Violence, hate speech (i.e. demeaning race, gender, age, religious
          or sexual orientation, etc.), or advocacy against any individual,
          group, or organization.
        </li>
        <li>
          - Images that are threatening, harassing, defamatory, or that
          encourage violence or crime.
        </li>
        <li>- Any images that might be illegal in the USA or EU.</li>
      </ul>

      <p className="py-4 ">
        If you are not sure whether the image you want to upload is allowed,
        then do not upload that image. Uploaded images are checked by staff and
        images that violate terms will be removed without prior warning. This
        may also get you banned from our website.
      </p>

      <h2 className="font-bold pt-4">Legalese</h2>
      <p className="py-4 ">
        By uploading a file or other content or by making a comment, you
        represent and warrant to us that (1) doing so does not violate or
        infringe anyone else rights; and (2) you created the file or other
        content you are uploading, or otherwise have sufficient intellectual
        property rights to upload the material consistent with these terms. With
        regard to any file or content you upload to the public portions of our
        site, you grant us a non-exclusive, royalty-free, perpetual, irrevocable
        worldwide license (with sublicense and assignment rights) to use, to
        display online and in any present or future media, to create derivative
        works of, to allow downloads of, and/or distribute any such file or
        content, including embedded (hotlinked) into third-party websites
        otherwise not affiliated with us.
      </p>

      <p>
        By downloading an image or copying other user-generated content (UGC)
        from us, you agree that you do not claim any rights to it. The following
        conditions apply:
      </p>
      <ul>
        <li>- You may use UGC for personal, non-commercial purposes.</li>
        <li>
          - You may not use UGC for non-journalistic commercial purposes, except
          if the UGC items in question have been legally uploaded by you (i.e.
          you are the copyright holder), or if you have otherwise obtained a
          license from the copyright owner. Posting photos of goods you sell is
          okay; ripping off a competitor catalogue is not.
        </li>
        <li>
          - You may not copy or use any portions of our site that are not UGC
          except within the limits of fair use.
        </li>
      </ul>

      <h2 className="font-bold pt-4">DMCA Notification</h2>
      <p className="py-4 ">
        If you see anything on our site that you believe infringes your
        copyright rights, you may notify our Digital Millennium Copyright Act
        (DMCA) agent by sending the following information .....
      </p>
    </section>
  );
};

export default Terms;
