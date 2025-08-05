import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi L'Aquila",
  canonical: links.servizi["disidratazione-fanghi"]["l-aquila"],
});
export default withBaseProps({
  title: "Disidratazione fanghi L'Aquila",
  locationNames: { label: "L'Aquila", href: "l-aquila" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
