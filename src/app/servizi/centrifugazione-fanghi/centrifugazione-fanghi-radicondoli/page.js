import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Radicondoli",
  canonical: links.servizi["centrifugazione-fanghi"]["radicondoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Radicondoli",
  locationNames: { label: "Radicondoli", href: "radicondoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
