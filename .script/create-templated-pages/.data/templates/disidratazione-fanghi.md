import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi [name]",
  canonical: links.servizi["disidratazione-fanghi"]["[path]"],
});
export default withBaseProps({
  title: "Disidratazione fanghi [name]",
  locationNames: { label: "[name]", href: "[path]" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
