import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montefalco",
  canonical: links.servizi["disidratazione-fanghi"]["montefalco"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montefalco",
  locationNames: { label: "Montefalco", href: "montefalco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
