import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Orvieto",
  canonical: links.servizi["centrifugazione-fanghi"]["orvieto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Orvieto",
  locationNames: { label: "Orvieto", href: "orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
