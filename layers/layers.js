ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32642").setExtent([96015.336803, 2655885.441177, 888060.892741, 3174969.842714]);
var wms_layers = [];

var lyr_Landscanpopulation2023_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Landscan population (2023)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landscanpopulation2023_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7420371.722645, 2754423.595516, 7917598.781558, 3310048.865335]
                            })
                        });
var format_Sindhdistricts_1 = new ol.format.GeoJSON();
var features_Sindhdistricts_1 = format_Sindhdistricts_1.readFeatures(json_Sindhdistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Sindhdistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sindhdistricts_1.addFeatures(features_Sindhdistricts_1);
var lyr_Sindhdistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sindhdistricts_1, 
                style: style_Sindhdistricts_1,
                popuplayertitle: "Sindh districts",
                interactive: false,
                title: '<img src="styles/legend/Sindhdistricts_1.png" /> Sindh districts'
            });
var format_Primaryfacilities_2 = new ol.format.GeoJSON();
var features_Primaryfacilities_2 = format_Primaryfacilities_2.readFeatures(json_Primaryfacilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Primaryfacilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryfacilities_2.addFeatures(features_Primaryfacilities_2);
var lyr_Primaryfacilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryfacilities_2, 
                style: style_Primaryfacilities_2,
                popuplayertitle: "Primary facilities",
                interactive: true,
    title: 'Primary facilities<br />\
    <img src="styles/legend/Primaryfacilities_2_0.png" /> Managed by: DOH, Facility type: BHU/MCH/MH/RHC/UD/GRD/GD/RD/UHC<br />\
    <img src="styles/legend/Primaryfacilities_2_1.png" /> Managed by: PPHI, Facility type: BHU/MCH/MH/RHC/UD/GRD/GD/RD/UHC<br />'
        });
var format_Secondaryfacilities_3 = new ol.format.GeoJSON();
var features_Secondaryfacilities_3 = format_Secondaryfacilities_3.readFeatures(json_Secondaryfacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Secondaryfacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secondaryfacilities_3.addFeatures(features_Secondaryfacilities_3);
var lyr_Secondaryfacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secondaryfacilities_3, 
                style: style_Secondaryfacilities_3,
                popuplayertitle: "Secondary facilities",
                interactive: true,
    title: 'Secondary facilities<br />\
    <img src="styles/legend/Secondaryfacilities_3_0.png" /> Managed by: DOH, Facility type: DHQ/THQ<br />\
    <img src="styles/legend/Secondaryfacilities_3_1.png" /> Managed by: PPHI, Facility type: DHQ/THQ<br />'
        });

lyr_Landscanpopulation2023_0.setVisible(true);lyr_Sindhdistricts_1.setVisible(true);lyr_Primaryfacilities_2.setVisible(true);lyr_Secondaryfacilities_3.setVisible(true);
var layersList = [lyr_Landscanpopulation2023_0,lyr_Sindhdistricts_1,lyr_Primaryfacilities_2,lyr_Secondaryfacilities_3];
lyr_Sindhdistricts_1.set('fieldAliases', {'ID': 'ID', 'District': 'District', 'Dist_short': 'Dist_short', 'layer': 'layer', 'path': 'path', });
lyr_Primaryfacilities_2.set('fieldAliases', {'Facility Name': 'Facility Name', 'Facility Code': 'Facility Code', 'District': 'District', 'Facility Type': 'Facility Type', 'Managed By': 'Managed By', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Facility type 2': 'Facility type 2', 'Category': 'Category', });
lyr_Secondaryfacilities_3.set('fieldAliases', {'Facility Name': 'Facility Name', 'Facility Code': 'Facility Code', 'District': 'District', 'Facility Type': 'Facility Type', 'Managed By': 'Managed By', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Facility type 2': 'Facility type 2', 'Category': 'Category', });
lyr_Sindhdistricts_1.set('fieldImages', {'ID': 'TextEdit', 'District': 'TextEdit', 'Dist_short': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Primaryfacilities_2.set('fieldImages', {'Facility Name': 'TextEdit', 'Facility Code': 'Range', 'District': 'TextEdit', 'Facility Type': 'TextEdit', 'Managed By': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Facility type 2': 'TextEdit', 'Category': 'TextEdit', });
lyr_Secondaryfacilities_3.set('fieldImages', {'Facility Name': 'TextEdit', 'Facility Code': 'Range', 'District': 'TextEdit', 'Facility Type': 'TextEdit', 'Managed By': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Facility type 2': 'TextEdit', 'Category': 'TextEdit', });
lyr_Sindhdistricts_1.set('fieldLabels', {'ID': 'no label', 'District': 'no label', 'Dist_short': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Primaryfacilities_2.set('fieldLabels', {'Facility Name': 'inline label - always visible', 'Facility Code': 'inline label - always visible', 'District': 'inline label - always visible', 'Facility Type': 'inline label - always visible', 'Managed By': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Facility type 2': 'hidden field', 'Category': 'hidden field', });
lyr_Secondaryfacilities_3.set('fieldLabels', {'Facility Name': 'inline label - always visible', 'Facility Code': 'inline label - always visible', 'District': 'inline label - always visible', 'Facility Type': 'inline label - always visible', 'Managed By': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Facility type 2': 'hidden field', 'Category': 'hidden field', });
lyr_Secondaryfacilities_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});