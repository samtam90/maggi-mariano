import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rignano sull'Arno",
  canonical: links.servizi["centrifugazione-fanghi"]["rignano-sull-arno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rignano sull'Arno",
  locationNames: { label: "Rignano sull'Arno", href: "rignano-sull-arno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
