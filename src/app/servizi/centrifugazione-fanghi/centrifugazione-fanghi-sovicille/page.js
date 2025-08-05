import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sovicille",
  canonical: links.servizi["centrifugazione-fanghi"]["sovicille"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sovicille",
  locationNames: { label: "Sovicille", href: "sovicille" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
