import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Otricoli",
  canonical: links.servizi["disidratazione-fanghi"]["otricoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Otricoli",
  locationNames: { label: "Otricoli", href: "otricoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
