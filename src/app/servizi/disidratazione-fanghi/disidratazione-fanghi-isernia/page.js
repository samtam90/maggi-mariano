import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Isernia",
  canonical: links.servizi["disidratazione-fanghi"]["isernia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Isernia",
  locationNames: { label: "Isernia", href: "isernia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
