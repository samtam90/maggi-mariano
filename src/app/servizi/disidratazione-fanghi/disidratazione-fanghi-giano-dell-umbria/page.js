import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Giano dell'Umbria",
  canonical: links.servizi["disidratazione-fanghi"]["giano-dell-umbria"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Giano dell'Umbria",
  locationNames: { label: "Giano dell'Umbria", href: "giano-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
