import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sestino",
  canonical: links.servizi["centrifugazione-fanghi"]["sestino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sestino",
  locationNames: { label: "Sestino", href: "sestino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
