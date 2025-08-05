import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Radicondoli",
  canonical: links.servizi["disidratazione-fanghi"]["radicondoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Radicondoli",
  locationNames: { label: "Radicondoli", href: "radicondoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
