import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Vicchio",
  canonical: links.servizi["centrifugazione-fanghi"]["vicchio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Vicchio",
  locationNames: { label: "Vicchio", href: "vicchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
