import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Campobasso",
  canonical: links.servizi["centrifugazione-fanghi"]["campobasso"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Campobasso",
  locationNames: { label: "Campobasso", href: "campobasso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
