ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32642").setExtent([89904.278243, 2642691.146930, 887816.838300, 3165620.618108]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_Landscanpopulation2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Landscan population (2023)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landscanpopulation2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7420371.722645, 2754423.595516, 7917598.781558, 3310048.865335]
                            })
                        });
var format_Sindhdistricts_2 = new ol.format.GeoJSON();
var features_Sindhdistricts_2 = format_Sindhdistricts_2.readFeatures(json_Sindhdistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Sindhdistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sindhdistricts_2.addFeatures(features_Sindhdistricts_2);
var lyr_Sindhdistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sindhdistricts_2, 
                style: style_Sindhdistricts_2,
                popuplayertitle: "Sindh districts",
                interactive: false,
                title: '<img src="styles/legend/Sindhdistricts_2.png" /> Sindh districts'
            });
var format_Primaryfacilities_3 = new ol.format.GeoJSON();
var features_Primaryfacilities_3 = format_Primaryfacilities_3.readFeatures(json_Primaryfacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Primaryfacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryfacilities_3.addFeatures(features_Primaryfacilities_3);
var lyr_Primaryfacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryfacilities_3, 
                style: style_Primaryfacilities_3,
                popuplayertitle: "Primary facilities",
                interactive: true,
    title: 'Primary facilities<br />\
    <img src="styles/legend/Primaryfacilities_3_0.png" /> Managed by: DOH, Facility type: BHU/MCH/MH/RHC/UD/GRD/GD/RD/UHC<br />\
    <img src="styles/legend/Primaryfacilities_3_1.png" /> Managed by: PPHI, Facility type: BHU/MCH/MH/RHC/UD/GRD/GD/RD/UHC<br />'
        });
var format_Secondaryfacilities_4 = new ol.format.GeoJSON();
var features_Secondaryfacilities_4 = format_Secondaryfacilities_4.readFeatures(json_Secondaryfacilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Secondaryfacilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secondaryfacilities_4.addFeatures(features_Secondaryfacilities_4);
var lyr_Secondaryfacilities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secondaryfacilities_4, 
                style: style_Secondaryfacilities_4,
                popuplayertitle: "Secondary facilities",
                interactive: true,
    title: 'Secondary facilities<br />\
    <img src="styles/legend/Secondaryfacilities_4_0.png" /> Managed by: DOH, Facility type: DHQ/THQ<br />\
    <img src="styles/legend/Secondaryfacilities_4_1.png" /> Managed by: PPHI, Facility type: DHQ/THQ<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Landscanpopulation2023_1.setVisible(true);lyr_Sindhdistricts_2.setVisible(true);lyr_Primaryfacilities_3.setVisible(true);lyr_Secondaryfacilities_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Landscanpopulation2023_1,lyr_Sindhdistricts_2,lyr_Primaryfacilities_3,lyr_Secondaryfacilities_4];
lyr_Sindhdistricts_2.set('fieldAliases', {'ID': 'ID', 'District': 'District', 'Dist_short': 'Dist_short', 'layer': 'layer', 'path': 'path', });
lyr_Primaryfacilities_3.set('fieldAliases', {'Facility Name': 'Facility Name', 'Facility Code': 'Facility Code', 'District': 'District', 'Facility Type': 'Facility Type', 'Managed By': 'Managed By', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Facility type 2': 'Facility type 2', 'Category': 'Category', });
lyr_Secondaryfacilities_4.set('fieldAliases', {'Facility Name': 'Facility Name', 'Facility Code': 'Facility Code', 'District': 'District', 'Facility Type': 'Facility Type', 'Managed By': 'Managed By', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Facility type 2': 'Facility type 2', 'Category': 'Category', });
lyr_Sindhdistricts_2.set('fieldImages', {'ID': 'TextEdit', 'District': 'TextEdit', 'Dist_short': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Primaryfacilities_3.set('fieldImages', {'Facility Name': 'TextEdit', 'Facility Code': 'Range', 'District': 'TextEdit', 'Facility Type': 'TextEdit', 'Managed By': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Facility type 2': 'TextEdit', 'Category': 'TextEdit', });
lyr_Secondaryfacilities_4.set('fieldImages', {'Facility Name': 'TextEdit', 'Facility Code': 'Range', 'District': 'TextEdit', 'Facility Type': 'TextEdit', 'Managed By': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Facility type 2': 'TextEdit', 'Category': 'TextEdit', });
lyr_Sindhdistricts_2.set('fieldLabels', {'ID': 'no label', 'District': 'no label', 'Dist_short': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Primaryfacilities_3.set('fieldLabels', {'Facility Name': 'inline label - always visible', 'Facility Code': 'inline label - always visible', 'District': 'inline label - always visible', 'Facility Type': 'inline label - always visible', 'Managed By': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Facility type 2': 'hidden field', 'Category': 'hidden field', });
lyr_Secondaryfacilities_4.set('fieldLabels', {'Facility Name': 'inline label - always visible', 'Facility Code': 'inline label - always visible', 'District': 'inline label - always visible', 'Facility Type': 'inline label - always visible', 'Managed By': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Facility type 2': 'hidden field', 'Category': 'hidden field', });
lyr_Secondaryfacilities_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});