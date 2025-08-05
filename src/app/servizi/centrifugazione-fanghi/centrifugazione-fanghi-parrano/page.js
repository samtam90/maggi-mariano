import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Parrano",
  canonical: links.servizi["centrifugazione-fanghi"]["parrano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Parrano",
  locationNames: { label: "Parrano", href: "parrano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
