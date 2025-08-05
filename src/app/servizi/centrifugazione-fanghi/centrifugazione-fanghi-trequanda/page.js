import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Trequanda",
  canonical: links.servizi["centrifugazione-fanghi"]["trequanda"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Trequanda",
  locationNames: { label: "Trequanda", href: "trequanda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
