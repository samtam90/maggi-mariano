import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ficulle",
  canonical: links.servizi["disidratazione-fanghi"]["ficulle"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ficulle",
  locationNames: { label: "Ficulle", href: "ficulle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
