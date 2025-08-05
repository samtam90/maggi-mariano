import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gorizia",
  canonical: links.servizi["centrifugazione-fanghi"]["gorizia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gorizia",
  locationNames: { label: "Gorizia", href: "gorizia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});
