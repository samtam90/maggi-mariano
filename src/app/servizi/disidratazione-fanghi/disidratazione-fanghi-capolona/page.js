import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Capolona",
  canonical: links.servizi["disidratazione-fanghi"]["capolona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Capolona",
  locationNames: { label: "Capolona", href: "capolona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
