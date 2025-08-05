import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ancona",
  canonical: links.servizi["disidratazione-fanghi"]["ancona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ancona",
  locationNames: { label: "Ancona", href: "ancona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
