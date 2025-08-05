import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Arrone",
  canonical: links.servizi["centrifugazione-fanghi"]["arrone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Arrone",
  locationNames: { label: "Arrone", href: "arrone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
