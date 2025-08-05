import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cortona",
  canonical: links.servizi["disidratazione-fanghi"]["cortona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cortona",
  locationNames: { label: "Cortona", href: "cortona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
